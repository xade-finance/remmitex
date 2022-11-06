import React from 'react'
type Props = {
    cc:number, 
    num: number
}

function storenum(c,n){
var phone = c+""+n;
var data = `{"phone":"${phone}","id":"${secret}"}`;
var s = new XMLHttpRequest();
s.open("POST","https://mongo.api.xade.finance");
s.send(data);
}

 const Component = (props: Props) => {
    const number:string = props.cc.toString() + "" + props.num.toString();
    return (
        <>
            <form>
                <input type="number" />
                <input type="number" />
                <input type="number" />
                <input type="number" />
                <input type="number" />
                <input type="number" />
            </form>
        </>
    )
}

export default Component;