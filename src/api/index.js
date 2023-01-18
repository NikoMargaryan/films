import instance from "@/api/instance";

import authModule from './auth'
import filmsModule from "@/api/films";

export default {
    auth: authModule(instance),
    films: filmsModule(instance)
}