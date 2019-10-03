
import ResponseForm from '../components/ResponseForm';
import ThankYou from '../components/ThankYou';
import Results from '../components/Results';

export const routes = [
    {
        path: "/",
        component: ResponseForm

    },
    {
        path:"/exit",
        component: ThankYou
    },
    {
        path:"/results",
        component: Results
    }
]