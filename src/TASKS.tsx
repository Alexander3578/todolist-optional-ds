import React from 'react';
import styled from 'styled-components';

type TasksType = {
    data: DataType
}

export type DataType = {
    title: string
    tasks: Array<TaskType>
    students: Array<string>
}

export type TaskType = {
    taskId: number
    title: string,
    isDone: boolean
}

export const Tasks: React.FC<TasksType> = (props: TasksType) => {
    return (
        <StyledTasks>
            <h1>{props.data.title}</h1>
            <div>{props.data.tasks.map((thing) => {
                return (
                    <div>
                        <span>{thing.taskId} </span>
                        <span>{thing.title} </span>
                        <input type = 'checkbox' checked={thing.isDone}/>
                    </div>
                )
            })}
            </div>
            <ol>
            {props.data.students.map((student) => {
                return <li>{student}</li>;
            })}
            </ol>
        </StyledTasks>
    );
};

const StyledTasks = styled.div`
  display: flex;
  flex-direction: column;
`

