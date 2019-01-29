import React from "react";
import {data} from "json!./../data.json";
import BookList from "./bookList";

export default class App extends React.Component {
	render(){
		return (<div>
					<BookList books={data.books} authors={data.authors}/>
				</div>
			);
	}

}