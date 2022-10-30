class redis {
    constructor(hostname, year) {
        this.hostname = hostname;
        this.port = port;
    }

    add() {
        /**
         * password: string
         */
        const redis = require('redis');
        const client = redis.createClient(); //{
        //     socket: {
        //         host: this.hostname,
        //         port: this.port
        //     },
        //     password: password
        // });
        client.on('error', err => {
            console.log('Error ' + err);
            return false
        });

        this.client = client
        return true
    }

    set(userId, lat, lon) {
        /*
        userId: string
        lat: string 
        lon: string
        */
        this.client.hmset(user, {
            'lat': lat,
            'lon': lon
        }, function(err, reply) {
            return true
        });
        return false
    }

    get(value) {
        /*
        value: string
        */
        this.client.exists(value, function(err, reply) {
            if (reply === 1) {
                this.client.get(value, function(err, vue) {
                    return true, vue
                });
            } else {
                return false, null
            }
        })
    }

    delete(value) {
        /*
        value: string
        */
        this.client.exists(value, function(err, reply) {
            if (reply === 1) {
                redis.del(value)
                return true
            } else {
                return false
            }
        })
    }
}



let redi = new redis(); //6379
console.log(redi.add())
console.log(redi.set('12345', '71.9834', '55.5844'))
    // console.log(redi.get('12345'))