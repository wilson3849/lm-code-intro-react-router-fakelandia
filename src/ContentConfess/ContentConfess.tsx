import { useState } from 'react';
import "./ContentConfess.css"; 
import { useForm } from "react-hook-form";

const ContentConfess : React.FC = () => { 
	const { register, formState, handleSubmit } = useForm()

	const [sysResp, setSysResp] = useState("")

	const onSubmit = (data:any) => {
		setSysResp('Your confess is submitted. Thanks for your responses.')
	}

    return (
        <>
            <div className="confessBody">
                <div className="confessBody confessStatment">
                    <article>
                    <div>it's very difficult to catch people committing misdemeanours so we appreciate it when citizens confess to us directly</div>
                    <div>However, if you're just having a hard day and need to vent then your're welcome to contact us here too up to you.</div>
                    </article>
                </div>
                <div className="confessBody confessForm">
                <form onSubmit={handleSubmit(onSubmit)}>
                <div>              
                    <div>
                        <label htmlFor="subject">Subject:</label>
                        <input id="subject" aria-label="subject" placeholder="your confess subject" {...register('subject',{
                            required: 'subject is required',
                            },
                        )} />
                        <div style={{color:'red'}}>{formState.errors.subject && formState.errors.subject.message}</div>
                    </div>
                    <div>
                        <label htmlFor="reasontype">Reason for contact:</label>
                        <select id="reasontype" aria-label="reasontype" {...register('reasontype',{
                            required: 'reasontype must be selected.',
                        })}>
                            <option value=''>select reason type</option>						
                            <option value='Mild Public Rudeness'>Mild Public Rudeness</option>
                            <option value='Speaking in a Lift'>Speaking in a Lift</option>
                            <option value='Not Eating Your Vegetables'>Not Eating Your Vegetables</option>
                            <option value='Supporting Manchester United'>Supporting Manchester United</option>
                            <option value='I just want to talk'>I just want to talk</option>
                        </select>
                        <div style={{color:'red'}}>{formState.errors.reasontype && formState.errors.reasontype.message}</div>
                    </div>  
                    <div>
                        <textarea id="reason" aria-label="reason" placeholder="explain the confess reason" {...register('content',{
                            required: 'Reason is required',
                            },
                        )} />
                        <div style={{color:'red'}}>{formState.errors.content && formState.errors.content.message}</div>
                    </div>
                    <div>
                        <button aria-label="submitButton">submit</button>
                    </div>
                    <div>
                        <div>{sysResp}</div>
                    </div>
                </div>                               
            </form>
            </div>
        </div>
        </>
    )
}

export default ContentConfess;