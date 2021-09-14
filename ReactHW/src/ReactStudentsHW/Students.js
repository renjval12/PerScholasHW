import Score from "./Score"

export default function Student(props) {
    return (
        <>
            {props.studentData.map((studentObj, index) =>
                <div class="student" id={"student-" + index} key={index}>
                    <h1>{studentObj.name}</h1>
                    <p>{studentObj.bio}</p>
                    <h2>Scores</h2>
                    <ul>
                        <Score object={studentObj} />
                    </ul>
                </div>)
            }
        </>
    )
}