import React from "react";

class Detail extends React.Component{
    componentDidMount(){
        const {location, history} = this.props;
        if(location.state === undefined){
            history.push("/");
        }
    }
    render(){
        const {location} = this.props;
        if(location.state){
             return <span>{location.state.title}</span>;
        } else {
            return null;
        }
    }
}

export default Detail;

/*
render가 먼저 실행되고 나서 componentDidMount가 실행되기 때문에
render에서 location을 부르면 에러가 뜸!
=> 해결하기 위해서 if문으로 return  결정

*/

