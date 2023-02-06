import { useState } from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";

const CreateAccount = () => {

    const [name, setName] = useState(' ')
    const [password, setPassword] = useState(' ')
    const [email, setEmail] = useState(' ')
    const [sal, setSal] = useState(' ')
    const [JoiningDate, setJoiningDate] = useState(' ')
    const [department, setDepartent] = useState(' ')

    const onCreateAccount = () => {
        if (name.length === 0) {
            toast.warning('Please Enter Name')
        } else if (password.length === 0) {
            toast.warning('Please Enter Password')
        } else if (email.length === 0) {
            toast.warning('Please Enter Email')
        } else if (sal.length === 0) {
            toast.warning('Please Enter Salary')
        } else if (JoiningDate === 0) {
            toast.warning('Please Enter Joining Date')
        } else if (department.length === 0) {
            toast.warning('Please Enter Department')
        } else {

        }

    }

    return (
        <div>
            <h2 className="page-title">CreateAccount</h2>
            <hr />
            <form action="">
                <div className="form-group">
                    <div className="mb-3">
                        <label className="form-label">Full Name</label>
                        <input onChange={(e) => {
                            setName(e.target.value)
                        }}
                            type="text" placeholder="Enter your name" className="form-control"
                        />
                    </div>
                </div>
                <div className="form-group">
                    <div className="mb-3">
                        <label className="form-label">Password</label>
                        <input onChange={(e) => {
                            setPassword(e.target.value)
                        }}
                            type="password" placeholder="******" className="form-control"
                        />
                    </div>
                </div>
                <div className="form-group">
                    <div className="mb-3">
                        <label className="form-label">Email</label>
                        <input onChange={(e) => {
                            setEmail(e.target.value)
                        }}
                            type="email" placeholder="example@gmail.com" className="form-control"
                        />
                    </div>
                </div>
                <div className="form-group">
                    <div className="mb-3">
                        <label className="form-label">Salary</label>
                        <input onChange={(e) => {
                            setSal(e.target.value)
                        }}
                            type="number" className="form-control"
                        />
                    </div>
                </div>
                <div className="form-group">
                    <div className="mb-3">
                        <label className="form-label">Joining Date</label>
                        <input onChange={(e) => {
                            setJoiningDate(e.target.value)
                        }}
                            type="date" className="form-control"
                        />
                    </div>
                </div>
                <div className="form-group">
                    <div className="mb-3">
                        <label className="form-label">Department</label>
                        <input onChange={(e) => {
                            setDepartent(e.target.value)
                        }}
                            type="text" className="form-control"
                        />
                    </div>
                </div>

                <div>
                    <p>Already have an Account? Login <Link to={'/Login'}>here</Link> </p>
                    <button onClick={onCreateAccount} type="button" class="btn btn-success">Create Account</button>
                    &emsp;
                    <button type="reset" class="btn btn-warning">Reset</button>

                </div>
            </form>


        </div>
    )
}

export default CreateAccount;