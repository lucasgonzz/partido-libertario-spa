// import VueScreenSize from 'vue-screen-size'
import moment from 'moment'
import numeral from 'numeral'
moment.locale('es')
export default {
	// mixins: [VueScreenSize.VueScreenSizeMixin],
	computed: {
		authenticated() {
			return this.$store.state.auth.authenticated
		}
	},
	watch: {
		$route() {
			this.$scrollToTop()
		}
	},
	methods: {
		modelPlural(model, replace_guion = false) {
			if (model.charAt(model.length-1) == 'y') {
				return model.substring(0, model.length-1)+'ies'
			}
			model += 's'
			if (replace_guion) {
				model = model.replace('_', '-')
			}
			return model
		},
		date(d) {
			return moment(d).format('DD/MM/YY')
		},
		hour(d) {
			return moment(d).format('HH:mm')
		},
		hour_from_time(d) {
			return moment(d, 'HH:mm:ss').format('HH:mm')
		},
		price(p) {
			if (p === null) {
				return '-'
			}
			let price = numeral(p).format('$0,0.00')
			// if (price.substr(price.length-2, price.length) == '00') {
			// 	return price.substr(0, price.length-3)
			// }
			return price
		},
		getMonth(d) {
			return moment(d).format('MMMM')
		},
		getDay(d) {
			return moment(d).format('dd')
		},
		since(date) {
			return moment(date).fromNow()
		},
		diff(d, formated = false) {
			var date = moment().diff(d, 'days')+''
			date = date.replace('-', '')
			if (formated) {
				// console.log('a: '+date)
				if (date == '0') {
					date = 'hoy'
				} else if (date == '1') {
					date = 'mañana'
				} else if (date == '2') {
					date = 'pasado mañana'
				} else {
					date = 'en ' + date + ' días'
				}
			} 
			return date
		},
		diff_(d) {
			var date = moment().diff(d, 'days')
			return date
		},
		scrollBottom(el) {
			setTimeout(() => {
				let container = document.getElementById(el)
				if (container) {
					container.scrollTop = container.scrollHeight
				}
			}, 1)
		},
		isEmail(email) {
		    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
		    return re.test(String(email).toLowerCase());
		},
	}
}