import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import ReactionTimer from "../views/ReactionTimer.vue";
import Jobs from "../views/jobs/Jobs.vue";
import JobDetails from "../views/jobs/JobDetails.vue";
import NotFound from "../views/NotFound.vue";
import Modal from "../views/Modal.vue";
import VueForm from "../views/VueForm.vue";
import Posts from "../views/Posts.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/reactionTimer",
    name: "ReactionTimer",
    component: ReactionTimer,
  },
  {
    path: "/jobs",
    name: "Jobs",
    component: Jobs,
  },
  {
    path: "/jobs/:id",
    name: "JobDetails",
    component: JobDetails,
    props: true,
  },
  // redirect
  {
    path: "/all-jobs",
    redirect: "/jobs",
  },
  // catchall 404
  {
    path: "/:catchall(.*)",
    name: "NotFound",
    component: NotFound,
  },
  {
    path: "/modal",
    name: "Modal",
    component: Modal,
  },
  {
    path: "/vueForm",
    name: "VueForm",
    component: VueForm,
  },
  {
    path: "/posts",
    name: "Posts",
    component: Posts,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
