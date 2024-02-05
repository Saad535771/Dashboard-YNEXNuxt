export let notificationList = [
    { id: 1, icon: 'ti ti-gift', iconBg: 'bg-primary-transparent', title: 'Your Order Has Been Shipped', description: 'Order No: 123456 Has Shipped To Your Delivery Address' },
    { id: 2, icon: 'ti ti-discount-2', iconBg: 'bg-secondary-transparent', title: 'Discount Available', description: 'Discount Available On Selected Products' },
    { id: 3, icon: 'ti ti-user-check', iconBg: 'bg-pink-transparent', title: 'Account Has Been Verified', description: 'Your Account Has Been Verified Sucessfully' },
    { id: 4, icon: 'ti ti-circle-check', iconBg: 'bg-warning-transparent', title: 'Order Placed ID: #1116773', description: 'Order Placed Successfully' },
    { id: 5, icon: 'ti ti-clock', iconBg: 'bg-success-transparent', title: 'Order Delayed ID: 7731116', description: 'Order Delayed Unfortunately' },
],
    cartList = [
        {
            id: 1, img: `${import.meta.env.BASE_URL}/images/ecommerce/jpg/1.jpg`, title: 'SomeThing Phone', categoryList: [
                { value: 'Metallic Blue', valueBgColor: '' },
                { value: '6gb Ram', valueBgColor: '' },
            ], price: '1,299.00'
        },
        {
            id: 2, img: `${import.meta.env.BASE_URL}/images/ecommerce/jpg/3.jpg`, title: 'Stop Watch', categoryList: [
                { value: '6gb Ram', valueBgColor: '' },
                { value: 'Free shipping', valueBgColor: 'bg-pink-transparent' },
            ], price: '179.29'
        },
        {
            id: 3, img: `${import.meta.env.BASE_URL}/images/ecommerce/jpg/5.jpg`, title: 'Photo Frame', categoryList: [
                { value: 'Decorative', valueBgColor: '' }
            ], price: '29.00'
        },
        {
            id: 4, img: `${import.meta.env.BASE_URL}/images/ecommerce/jpg/4.jpg`, title: 'Kikon Camera', categoryList: [
                { value: 'Black', valueBgColor: '' },
                { value: '50MM', valueBgColor: '' },
            ], price: '4,999.00'
        },
        {
            id: 5, img: `${import.meta.env.BASE_URL}/images/ecommerce/jpg/6.jpg`, title: 'Canvas Shoes', categoryList: [
                { value: 'Gray', valueBgColor: '' },
                { value: 'Sports', valueBgColor: '' },
            ], price: '129.00'
        },
    ];