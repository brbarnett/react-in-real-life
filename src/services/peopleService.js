const getPeople = () => {
    const promise = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(
                [
                    {
                        id: 1,
                        name: 'Brennen',
                        hometown: 'Dallas, TX'
                    },
                    {
                        id: 2,
                        name: 'Brandon',
                        hometown: 'Grosse Pointe, MI'
                    }
                ]
            );
        }, 500);
    });

    return promise;
};

module.exports = {
    getPeople
};