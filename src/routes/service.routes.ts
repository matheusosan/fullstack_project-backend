import { create, get } from '../controllers/service.controller'

const serviceRoutes = (app: any) => {
    app.post('/service', create)
    app.get('/service', get)
}

export default serviceRoutes