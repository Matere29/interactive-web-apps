FREE_WARNING = 'Free shipping only applies to single customer orders'
BANNED_WARNIN = 'Unfortunately we do not ship to your country of residence'
NONE_SELECTED = '0'

const shoes = 300 * 1
const toys = 100 * 5
const shirts = 150 * 'NONE_SELECTED'
const batteries = 35 * 2
const pens = 5 * 'NONE_SELECTED' 
let shipping = null
const currency = '$'
const customers = '1'
location = 'RSA'
currency = null


if (location === 'RSA') {
 shipping === 400 && currency === 'R'
}
else if (location == NAM) 
{shipping = 600 
}
else {
    shipping = 800

}

if (shoes + batteries + pens + shirts > 1000 && currency === 'R' ) {
	if (location = NAM && customers < 2) {
			if (location = RSA)
		    shipping = 0 || calcShipping
		}
	}


if (shipping = 0 && customers !== 1) { console.log(WARNING) }

location = 'NK' ? console.log(WARNING) : console.log('price', currency, shoes + batteries + pens + shirts + shipping)

