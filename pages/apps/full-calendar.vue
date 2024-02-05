<script lang="ts">
import PageHeader from "@/components/common/pageheader.vue";

import { ref } from 'vue';
import FullCalendar from "@fullcalendar/vue3";
import dayGridPlugin from "@fullcalendar/daygrid";
import { INITIAL_EVENTS } from "./calendar";
import interactionPlugin, { Draggable } from "@fullcalendar/interaction";
import timeGridPlugin from "@fullcalendar/timegrid";
import auth from '@/middleware/auth';


export default {
  setup() {
    definePageMeta({
      middleware: [auth],
    })

    const fullCalendarRef = ref('null');
    const calendarOptions = {
      plugins: [dayGridPlugin, interactionPlugin, timeGridPlugin],
      headerToolbar: {
        left: "prev,next today",
        center: "title",
        right: "dayGridMonth,timeGridWeek,timeGridDay",
      },
      initialView: "dayGridMonth",
      initialEvents: INITIAL_EVENTS,
      editable: true,
      selectable: true,
      selectMirror: true,
      dayMaxEvents: true,
      weekends: true,
      droppable: true,
      eventReceive: handleEventReceive,
      select: function (arg: any) {
        var title = prompt('Event Title:');
        if (fullCalendarRef) {
          if (title) {
            fullCalendarRef.value.getApi().addEvent({
              title: title,
              start: arg.start,
              end: arg.end,
              allDay: arg.allDay
            })
          }
          fullCalendarRef.value.getApi().unselect();
        }
      },
      eventClick: function (arg: any) {
        if (confirm('Are you sure you want to delete this event?')) {
          arg.event.remove()
        }
      },
    };
    function handleEventReceive(info: any) {
      // Check if the dragged event comes from external-events
      if (info.draggedEl.classList.contains('fc-event')) {
        const title = info.draggedEl.querySelector('.fc-event-main').innerText;
        const className = info.draggedEl.className;
        // Add the event to fullCalendarRef
        if (fullCalendarRef) {
          fullCalendarRef.value?.getApi().addEvent({
            title,
            start: info.event.start,
            allDay: info.event.allDay,
            className,
          });
        }

        // Remove the dragged element from the external-events
        info.draggedEl.remove();
      }
    }

    return {
      fullCalendarRef,
      calendarOptions,
      handleEventReceive,
    };
  },
  components: {
    PageHeader,
    FullCalendar,
  },
  data() {
    return {
      dataToPass: {
        current: "Full Calendar",
        list: [
          'Apps', 'Full Calendar'
        ]
      },
    }
  },
  methods: {
    setupDraggable() {
      new Draggable(document.getElementById("external-events"), {
        itemSelector: ".fc-event",
        eventData: (eventEl) => {
          let event = {
            title: eventEl.innerText,
            duration: "01:00"
          };
          return event;
        }
      });
    }
  },
  mounted() {
    this.setupDraggable();
  },

};
</script>
  
<template>
  <PageHeader :propData="dataToPass" />

  <!-- Start::row-1 -->
  <div class="row">
    <div class="col-xl-3">
      <div class="card custom-card">
        <div class="card-header d-grid">
          <button class="btn btn-primary-light btn-wave"><i class="ri-add-line align-middle me-1 fw-semibold"></i>Create
            New Event</button>
        </div>
        <div class="card-body p-0">
          <div id="external-events" class="border-bottom p-3">
            <div class="fc-event fc-h-event fc-daygrid-event fc-daygrid-block-event bg-primary border border-primary">
              <div class="fc-event-main">Calendar Events</div>
            </div>
            <div class="fc-event fc-h-event fc-daygrid-event fc-daygrid-block-event bg-secondary border border-secondary"
              data-class="bg-secondary">
              <div class="fc-event-main">Birthday EVents</div>
            </div>
            <div class="fc-event fc-h-event fc-daygrid-event fc-daygrid-block-event bg-success border border-success"
              data-class="bg-success">
              <div class="fc-event-main">Holiday Calendar</div>
            </div>
            <div class="fc-event fc-h-event fc-daygrid-event fc-daygrid-block-event bg-info border border-info"
              data-class="bg-info">
              <div class="fc-event-main">Office Events</div>
            </div>
            <div class="fc-event fc-h-event fc-daygrid-event fc-daygrid-block-event bg-warning border border-warning"
              data-class="bg-warning">
              <div class="fc-event-main">Other Events</div>
            </div>
            <div class="fc-event fc-h-event fc-daygrid-event fc-daygrid-block-event bg-danger border border-danger"
              data-class="bg-danger">
              <div class="fc-event-main">Festival Events</div>
            </div>
            <div class="fc-event fc-h-event fc-daygrid-event fc-daygrid-block-event bg-teal border border-teal"
              data-class="bg-danger">
              <div class="fc-event-main">Timeline Events</div>
            </div>
          </div>
          <div class="p-3">
            <div class="d-flex align-items-center justify-content-between">
              <h6 class="fw-semibold">
                Activity :
              </h6>
              <button class="btn btn-primary-light btn-sm btn-wave">View All</button>
            </div>
          </div>
          <div class="p-3 border-bottom" id="full-calendar-activity">
            <ul class="list-unstyled mb-0 fullcalendar-events-activity">
              <li>
                <div class="d-flex align-items-center justify-content-between flex-wrap">
                  <p class="mb-1 fw-semibold">
                    Monday, Jan 1,2023
                  </p>
                  <span class="badge bg-light text-default mb-1">12:00PM - 1:00PM</span>
                </div>
                <p class="mb-0 text-muted fs-12">
                  Meeting with a client about new project requirement.
                </p>
              </li>
              <li>
                <div class="d-flex align-items-center justify-content-between flex-wrap">
                  <p class="mb-1 fw-semibold">
                    Thursday, Dec 29,2022
                  </p>
                  <span class="badge bg-success mb-1">Completed</span>
                </div>
                <p class="mb-0 text-muted fs-12">
                  Birthday party of niha suka
                </p>
              </li>
              <li>
                <div class="d-flex align-items-center justify-content-between flex-wrap">
                  <p class="mb-1 fw-semibold">
                    Wednesday, Jan 3,2023
                  </p>
                  <span class="badge bg-warning-transparent mb-1">Reminder</span>
                </div>
                <p class="mb-0 text-muted fs-12">
                  WOrk taget for new project is completing
                </p>
              </li>
              <li>
                <div class="d-flex align-items-center justify-content-between flex-wrap">
                  <p class="mb-1 fw-semibold">
                    Friday, Jan 20,2023
                  </p>
                  <span class="badge bg-light text-default mb-1">06:00PM - 09:00PM</span>
                </div>
                <p class="mb-0 text-muted fs-12">
                  Watch new movie with family
                </p>
              </li>
              <li>
                <div class="d-flex align-items-center justify-content-between flex-wrap">
                  <p class="mb-1 fw-semibold">
                    Saturday, Jan 07,2023
                  </p>
                  <span class="badge bg-danger-transparent mb-1">Due Date</span>
                </div>
                <p class="mb-0 text-muted fs-12">
                  Last day to pay the electricity bill and water bill.need to check the bank details.
                </p>
              </li>
            </ul>
          </div>
          <div class="p-3">
            <img src="/images/media/media-83.svg" alt="">
          </div>
        </div>
      </div>
    </div>
    <div class="col-xl-9">
      <div class="card custom-card">
        <div class="card-header">
          <div class="card-title">Full Calendar</div>
        </div>
        <div class="card-body">
          <!-- <div id='calendar2'></div> -->
          <FullCalendar ref="fullCalendarRef" id="calendar2" :editable="true" :droppable="true" :options="calendarOptions"
            @eventReceive="handleEventReceive" />
        </div>
      </div>
    </div>
  </div>
  <!--End::row-1 -->
</template>
  
<style scoped></style>
  
  