import React from 'react'


// this is function base component
const Test = () => {

	
	return (
		<div className="container mt-5" style={{minHeight:"80vh"}}>
		<p>This is test page.</p>
		{/* this is nested way to show component(class component)*/}
		<Car />
		</div>
	)
}




// this is class component
class Car extends React.Component {
	  render() {
	    return <h2>Hi, I am a Car!</h2>;
	  }
	}




export default Test