import React from 'react';
import { AiOutlineUpload, AiOutlineUnorderedList} from "react-icons/ai";
import { RiScissorsCutLine, RiMore2Fill } from "react-icons/ri";
import { BiCrop } from "react-icons/bi";
import { FaTv, FaListUl } from 'react-icons/fa';
import { BsFillGridFill } from 'react-icons/bs';
import upload from './../../../../assets/imgs/upload.svg';
import './index.css';
class Workspace extends React.Component {
    state = {
        flag: true,
        data: [
            {
                name: 'Myvideo_3221.1.mp4',
                time: '00:00:05',
                size: '500MB',
                state: 'Original',
                active: false,
                updated_at:'00:52:00 ago'
            },
            {
                name: 'Myvideo_3221.1.mp4',
                time: '00:20:05',
                size: '350MB',
                state: 'Original',
                active: true,
                solution:'00:01:18',
                updated_at: '00:52:00 ago'
            },
            {
                name: 'Myvideo_3221.1.mp4',
                time: '00:00:05',
                size: '500MB',
                state: 'Original',
                active: true,
                trim: '00:01:18',
                updated_at: '00:52:00 ago'
            },
            {
                name: 'Myvideo_3221.1.mp4',
                time: '00:00:05',
                size: '500MB',
                state: 'Original',
                active: true,
                crop: '00:01:18',
                updated_at: '00:52:00 ago'
            },
            {
                name: 'Myvideo_3221.1.mp4',
                time: '00:00:05',
                size: '500MB',
                state: 'Processing..',
                active: false,
                updated_at: '00:52:00 ago'
            },
            {
                name: 'Myvideo_3221.1.mp4',
                time: '00:00:05',
                size: '500MB',
                state: 'Original',
                active: false,
                updated_at: 'Just uploaded'
            },
        ]
    }
    render() {
        const { data } = this.state;
        console.log(data)
        return (
            <div className="workspace">
                <div className="container pv-70">
                    <div className="job-title">Job States</div>
                    <div className="job-group">
                        <div className="row">
                            <div className="col-md-3">
                                <div className="workspace-video-box">
                                    <AiOutlineUpload className="workspace-box-icon"/>
                                    <div className="workspace-box-text">Video upload</div>
                                    <div className="workspace-box-count">13</div>
                                </div>
                            </div>
                            <div className="col-md-3">
                                <div className="workspace-solution-box">
                                    <FaTv className="workspace-box-icon"/>
                                    <div className="workspace-box-text">Super Resolution</div>
                                    <div className="workspace-box-count">12</div>
                                </div>
                            </div>
                            <div className="col-md-3">
                                <div className="workspace-trim-box">
                                    <RiScissorsCutLine className="workspace-box-icon" />
                                    <div className="workspace-box-text">Trim</div>
                                    <div className="workspace-box-count">3</div>
                                </div>
                            </div>
                            <div className="col-md-3">
                                <div className="workspace-crop-box">
                                    <BiCrop className="workspace-box-icon" />
                                    <div className="workspace-box-text">Cropping</div>
                                    <div className="workspace-box-count">0</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="file-upload d-v-center">
                        <div>
                            <div className="file-upload-text">
                                Click here to upload your videos
                            </div>
                            <div className="text-center p-30">
                                <img src={upload} alt="" />
                            </div>
                            <div className="file-size">Video input size must be under 1280 * 720</div>
                        </div>
                    </div>
                    <div className="job-title pv-70">
                        <div>Workspace
                        {this.state.flag ? (<BsFillGridFill className="grid-icon" onClick={() => this.setState({ flag: false })} />) :
                                (<FaListUl className="grid-icon" onClick={() => this.setState({ flag: true })} />)}</div>
                        
                       
                    </div>
                    <table className="table table-striped">
                        <tbody>
                            {data.map((item, i) => (
                                <tr key={i}>
                                    <th>
                                        <div className="table-box"></div>
                                    </th>
                                    <td>{item.name}</td>
                                    <td>{item.time}</td>
                                    <td>{item.size}</td>
                                    <td>{item.active ?
                                        (<div className="v-center">{item.solution ? (
                                            <><div className="table-solution d-v-center"><FaTv /></div><div>&nbsp;{item.solution}</div></>
                                            
                                        ) : item.trim ? (<div className="v-center"><div className="table-trim d-v-center"><RiScissorsCutLine /></div><div>&nbsp;{item.trim}</div></div>) :
                                                item.crop ? (<div className="v-center"><div className="table-crop d-v-center"><BiCrop /></div><div>&nbsp;{item.crop}</div></div>) : ''}</div>) :
                                        (
                                            <div>{item.state == 'Original' ? (<div className="original">{item.state}</div>) : (
                                                <div><span style={{ color: '#39dfdb' }}>{item.state}</span><span style={{ color: '#e02020' }}> Cancel</span></div>)}</div>
                                        )}
                                    </td>
                                    <td>{item.updated_at}</td>
                                    <td><RiMore2Fill className="more-icon"/></td>
                                </tr>
                            ))}
                            
                        </tbody>
                    </table>
                </div>
            </div>
        )
    }
}
export default Workspace;