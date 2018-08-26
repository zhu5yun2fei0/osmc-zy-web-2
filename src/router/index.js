import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Index from '@/views/layout/Index'
import frame from '@/views/frame/Index'
import conduit from '@/views/conduit/Index'
import machineframe from '@/views/machineframe/Index'
import handwell from '@/views/handwell/Index'
import pipingshaft from '@/views/pipingshaft/Index'
import pole from '@/views/pole/Index'

Vue.use(Router)

export default new Router({
  routes: [
    {
      	path: '/',
      	name: 'Index',
      	component: Index,
      	children:[
	        {
	          path: 'frame',
	          name: 'frame',
	          component:frame
	        },
          {
            path: 'machineframe',
            name: 'machineframe',
            component:machineframe
          },
          {
            path: 'conduit',
            name: 'conduit',
            component:conduit
          },
          {
            path: 'handwell',
            name: 'handwell',
            component:handwell
          },
          {
            path: 'pipingshaft',
            name: 'pipingshaft',
            component:pipingshaft
          },
          {
            path: 'pole',
            name: 'pole',
            component:pole
          } 
        ]
    }
  ]
})
