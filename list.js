console.log("CONNECTED")

var todo=[];

var input =prompt("what  would u like to do ");

while(input !=="quit"){



if(input==="list"){
	console.log(todo)
}

else if(input==="new"){
	var task=prompt("what task would u like to add");
	todo.push(task);
		console.log(todo)
	}
	var input =prompt("what  would u like to do ");
} 
console.log("you quit the app")