
exports.min = function min (array){
	if ((array === undefined)||(array[0] === undefined)){return 0}
	else{
		let min = array[0];
		for(i=0;i<array.length;i++){
			let temp = array[i];
			if(temp<min){
			min=temp}
			}
		return min;
	}
}
exports.max = function max (array){
	if ((array == undefined)||(array == 0)){return 0}
	else{
		var max=array[0];
		for(i=0;i<array.length;i++){
			var temp=array[i];
			if(temp>max){
			max=temp}
			}
		return max;
	}
}

exports.avg = function avg (array){
	if ((array == undefined)||(array == 0)){return 0}
	else{
		var count = 0;
		for(i=0;i<array.length;i++){
			count += array[i]
			}
		return count/array.length;
	}
}
