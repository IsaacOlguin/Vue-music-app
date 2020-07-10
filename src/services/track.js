import musicService from './music';

const trackService = {
    search: (q) => {
        const type = 'track';

        return musicService.get(
            '/search', 
            {
                params: {
                    q,
                    type
                }
            }
        )
        .then(res => res.data)
        .catch(error => {
            console.log(error);
        })
    }
};

export default trackService;