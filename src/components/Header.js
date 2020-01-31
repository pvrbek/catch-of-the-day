import React, {Fragment} from 'react';


const Header = (props) => (
        <header className={"top"}>
            <h1>Catch
                <span className={"ofThe"}>
                            <span className={"of"}>Of</span>
                            <span className={"the"}>The</span>
                        </span>
                Day
            </h1>
            <h3 className={"tagline"}>
                <span>{props.tagLine}</span>
                <span>{props.age}</span>
            </h3>
        </header>
);

// class Header extends React.Component {
//     render() {
//         return (
//             <Fragment>
//                 <header className={"top"}>
//                     <h1>Catch
//                         <span className={"ofThe"}>
//                             <span className={"of"}>Of</span>
//                             <span className={"the"}>The</span>
//                         </span>
//                         Day
//                         </h1>
//                     <h3 className={"tagline"}>
//                         <span>{this.props.tagLine}</span>
//                     </h3>
//                 </header>
//             </Fragment>
//         )
//     }
// }

export default Header;
