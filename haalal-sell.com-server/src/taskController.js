const taskModel= require("../models/taskModel");
// const mongoose=require('mongoose');



exports.createTask= async(req,res,next)=>{
    try {
        const reqBody = req.body;
        reqBody.email = req.headers.email;
        const data = await taskModel.create(reqBody);
        res.status(200).json({ status: "success", data: data });
    } catch (err) {
        res.status(400).json({ status: "fail", data: err });
        next (err)
    }
}

// Update Task
exports.updateTask= async(req,res,next)=>{
    try{
        const {taskId,status}= req.params;
        const userId = req.headers._id ;
        const filter = {
          userId,
          _id: taskId,
        };
        const task = await taskModel.findOne(filter);
    
        if (!task) {
          res.status(400).json({massage:"invalid task id"})
        }else{
            task.status = status ?? task.status;
            await task.save();
            return res.status(200).json({ message: "Task updated successfully" });
        }
    }catch (err) {
        res.status(400).json({ status: "fail", data: err });
        next (err)
}};

// Delete Task
exports.deleteTask = async (req, res,next) => {
    try {
        const { taskId } =req.params;
        const userId = req.headers._id ;
    const filter = {
        userId,
      _id: taskId
    };
    const task = await taskModel.findOne(filter);

    if (!task) {
      res.status(400).json({massage:"invalid task id"})
    }else {
        // Delete the task
        await task.deleteOne();
        // Respond to the client
        return res.status(200).json({ message: "Task deleted successfully" });
      }
    }   
    
    catch (err) {
        console.error(err);
        res.status(400).json({ status: "fail", data: err });
        next(err)
    }
};

// List Task By Status
exports.listTaskByStatus = async (req, res, next) => {
    try {
        const status = req.params.status;
        const userId = req.headers._id ;


        const data = await taskModel.aggregate([
            {
                $match: {
                    status: status,
                        userId
                }
            },
            {
                $project: {
                    _id: 1,
                    title: 1,
                    description: 1,
                    status: 1,
                    createdDate: {
                        $dateToString: {
                            date: "$createdDate",
                            format: "%d-%m-%Y"
                        }
                    }
                }
            }
        ]);

        res.status(200).json({ status: "success", data: data });
    } catch (err) {
        console.error(err);
        res.status(400).json({ status: "fail", data: err });
        next(err);
    }
}

// Task Status Count
exports.taskStatusCount = async (req, res, next) => {
    try {
        const email = req.headers.email;
    
        const result = await taskModel.aggregate([
          { $match: { email: email } },
          {
            $group: {
              _id: "$status",
              total: { $count: {} },
            },
          },
        ]);
    
        // response to client
        return res.status(200).json({
           
          message: "success",
          data: result,
        })
      } catch (err) {
        next(err);
      }
};

