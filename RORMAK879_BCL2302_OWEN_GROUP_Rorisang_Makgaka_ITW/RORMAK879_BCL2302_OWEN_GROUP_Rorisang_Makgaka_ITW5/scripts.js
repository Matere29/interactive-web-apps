FREE_WARNING = 'Free shipping only applies to single customer orders'
BANNED_WARNIN = 'Unfortunately we do not ship to your country of residence'
NONE_SELECTED =  2

shoes = 300 * 1
toys  = 100 * 5
shirts = 150 * NONE_SELECTED
batteries = 35 * 2
pens = 5 * NONE_SELECTED 

shipping = 400
currency = 'R'
customers = 1
location1 = 'RSA'


if (shipping === 0  && customers !== 1) { console.log(NONE_SELECTED) }
if(location1 === 'NK' ){ console.log(BANNED_WARNIN) }

if (location1 === 'RSA') { shipping === 400 && currency === 'R' }

if (location1 === 'NAM'){shipping === 600 && currency === '$'}
 
else {shipping === 800}


if (shoes + batteries + pens + shirts >= 1000 && customers === 1) {
	if (location1 === 'NAM' && customers < 2) {
			if (location === 'RSA' && customers < 2)
		    shipping = 0 || calcShipping
		}
    }	



 console.log('price', currency, shoes + batteries + pens + shirts + shipping);

