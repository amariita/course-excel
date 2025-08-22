class Dom {
   constructor(selector) {

    this.$$listeners = {}

    // #app
    this.$el = typeof selector === 'string' 
    ? document.querySelector(selector)
    : selector
   }
   html(html) {
    if(typeof html === 'string') {
        this.$el.innerHTML = html
        return this
    }
    return this.$el.outerHTML.trim()
   }

   clear() {
    this.html('')
    return this
   }

   on(eventType, callBack) {
    // this.$$listeners[eventType] = callback
    this.$el.addEventListener(eventType, callBack)
   }

   off(eventType, callback) {
         this.$el.removeEventListener(eventType, callback)
   }

   //element
   append(node) {
    if(node instanceof Dom) {
        node = node.$el
    }

    if(Element.prototype.append) {
        this.$el.append(node)
    } else {
        this.$el.appendChild(node)
    }
        return this
    
   }
}


// event.target
export function $(selector) {
    return new Dom(selector)
}

$.create = (tagName, classes = '') => {
    const el = document.createElement(tagName)

    if(classes) {
        el.classList.add(classes)
    }
    return $(el)
}