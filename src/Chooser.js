import React,{Component,PropTypes}from 'react'
import {
    View,Text,Image,ScrollView,Dimensions,TouchableOpacity
} from 'react-native'
var {height,width}=Dimensions.get('window');
var selected=0;
var checkedImg;
var unCheckedImg
var itemSelectedAction;
export default class Chooser extends Component{
    componentWillMount(){
        this.itemList=this.getChildren();
        selected=this.props.defaultSelected;
        checkedImg=this.props.checkedImg;
        unCheckedImg=this.props.unCheckedImg;
        itemSelectedAction=(index)=>{this.props.itemSelected(index);this.setState({});}
    }
    render(){
        return (<ScrollView style={[{backgroundColor:'white'},this.props.style]}>
            {this.itemList.map((data,index)=>{
                return(<ChooserItem index={index} key={index} data={data} style={this.props.dataItemStyle} rightIconStyle={this.props.checkIconStyle}/>)
            })}
            </ScrollView>)
    }

    getChildren(){
        let res= new Array(0)
        let {children}=this.props;
        if(children.length==undefined){
            res.push(children)
        }
        else {
            for (let i=0;i<children.length;i++){
            res.push(children[i])
            }
        }
        return res;
    }
}
Chooser.defaultProps={
    style:{width:width,height:height},
    defaultSelected:0,
    unCheckedImg:<Image style={{height:height*0.1,width:width*0.1}} resizeMode='contain' source={require('./img/unChecked.png')}/>,
    checkedImg:<Image  style={{height:height*0.1,width:width*0.1}} resizeMode='contain' source ={require('./img/checked.png')}/>,
    checkIconStyle:{height:height*0.1,flex:1,justifyContent:'center',alignItems:'center'},
    dataItemStyle:{height:height*0.1,width:width,alignItems:'center',alignItems:'center'}, 
    itemSelected:(index)=>{console.log('selected'+index)}
}
Chooser.propTypes={
    defaultSelected:PropTypes.number,
    unCheckedImg:PropTypes.instanceOf(<Image/>),
    checkedImg:PropTypes.instanceOf(<Image />),
    itemSelected:PropTypes.func
}
export class ChooserItem extends Component{
    componentWillMount(){
        this.index=this.props.index;
        this.state={
            selected:selected==this.props.index
        }
    }

render(){
    return (<TouchableOpacity style={[this.props.style,{flexDirection:'row'}]} onPress={()=>{selected=this.index;itemSelectedAction(this.index)}}>
        {this.props.data}
        <View style={this.props.rightIconStyle}>
        {
            selected==this.index?checkedImg:unCheckedImg
        }
        </View>
    
    </TouchableOpacity>)
}
}