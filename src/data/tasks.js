const tasks = [
    {
        id: 1,
        headerData: {
            title: 'Task 1',
            price: 100
        },
        bodyData: {
            location: 'Rockdale',
            date: new Date().toLocaleDateString()
        },
        footerData: {
            status: 'Open'
        }
    },
    {
        id: 2,
        headerData: {
            title: 'Task 2',
            price: 250
        },
        bodyData: {
            location: 'Kogarah',
            date: new Date().toLocaleDateString()
        },
        footerData: {
            status: 'Open'
        }
    },
    {
        id: 3,
        headerData: {
            title: 'Task 3',
            price: 150
        },
        bodyData: {
            location: 'Wolli Creek',
            date: new Date(2020,4,12).toLocaleDateString()
        },
        footerData: {
            status: 'Open'
        }
    }
]

export default tasks