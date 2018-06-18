import React from 'react';
import ReactDOM from 'react-dom';

import JSON from './db.json';

//COMPONENTS
import Header from './components/header';
import NewsList from './components/news_list';


class App extends React.Component {

    state = {
        news:JSON,
        filtered:[]
    }

    getkeyword = (event) =>{
        let keyword = event.target.value;
        let filtered = this.state.news.filter((item)=>{
            return item.title.indexOf(keyword) > -1
        });

        this.setState({
            filtered
        })

        //console.log(filtered)


    }

    render(){
        
        return (
            <div> 
                <Header keyword={this.getkeyword}/>
                <NewsList news={this.state.filtered.length ===0
                    ? this.state.news : this.state.filtered}>
                    The News Is:
                </NewsList>
            </div>
        )    
    }
    
}


ReactDOM.render(<App/>,document.querySelector('#root'));