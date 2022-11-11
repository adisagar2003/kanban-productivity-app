import React from "react";
import Task from "./Task";
import "./Tasks.css";
function Tasks() {
  return (
    <div className="Tasks">
      <div className="Tasks__todo">
        <div className="Tasks__genre blue">TODO (4)</div>
        <div className="Task__tasks">
          <Task
            title="Connect supabase"
            description="count the number afterwards"
          />
          <Task
            title="Connect supabase"
            description="count the number afterwards"
          />
          <Task
            title="Connect supabase"
            description="count the number afterwards"
          />
          <Task
            title="Connect supabase"
            description="count the number afterwards"
          />
          <Task
            title="Connect supabase"
            description="count the number afterwards"
          />
        </div>
      </div>
      <div className="Tasks__doing">
        <div className="Tasks__genre green">DOING (4)</div>
        <div className="Task__tasks">
          <Task
            title="Do the dishes"
            description="count the number afterwards"
          />
          <Task
            title="Connect supabase"
            description="count the number afterwards"
          />
        </div>
      </div>
      <div className="Tasks__done">
        <div className="Tasks__genre red">DONE (8)</div>
        <div className="Task__tasks">
          <Task
            title="Frontend done"
            description="Be proud of yourself cunt."
          />
          <Task
            title="Connect supabase"
            description="count the number afterwards"
          />
          <Task
            title="Connect supabase"
            description="count the number afterwards"
          />
        </div>
      </div>
    </div>
  );
}

export default Tasks;
