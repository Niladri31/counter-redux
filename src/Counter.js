import {useSelector} from 'react-redux';
export default function Counter(){
    const count = useSelector(state=>state);
    console.log(count.counter)
    return (
    <>
    {count.counter}
    </>
    )
}