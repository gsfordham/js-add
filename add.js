var add_list = function(lst){
	return (!(lst.constructor === Array) ? 
		(isNaN(lst) ? (0) : (parseFloat(lst))) : 
			((lst.length == 0) ? (0) : (((!isNaN(lst[0]) && !(lst[0] == '')) ?
				(parseFloat(lst[0])) : (0)) + add_list(lst.slice(1, lst.length)))));}