import AppSearch from '@/components/AppSearch.vue';
import AppAbout from '@/components/AppAbout.vue';
import AppTrackDetail from '@/components/AppTrackDetail';

const routes = [
    {
        path: '/',
        component: AppSearch,
        name: 'app-search'
    },
    {
        path: '/about',
        component: AppAbout,
        name: 'app-about'
    },
    {
        path: '/trackDetail/:id',
        component: AppTrackDetail,
        name: "app-track-detail"
    }
];

export default routes;