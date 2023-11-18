const Notesmodel = require("../modal/Notes");

// get the notes
const Getnotes = async (req, res) => {
  const id = req.newuser.id;

  try {
    const getnotes = await Notesmodel.find({user:id});
    if (!getnotes) {
      return res.send({ success: false, msg: "Please add Some Notes" });
    }
    return res.send({ success: true, msg: "get all the Notes", getnotes });
  } catch (error) {
    console.log(error);
    return res.send({ success: true, msg: "get all the Notes" });
  }
};

// post the some notes;

const Addnotes = async(req, res) => {
    const id = req.newuser.id;
  const { title, description } = req.body;

  if (!title) {
    return res.send({ success: false, msg: "Please fill all field " });
  }

  if (!description) {
    return res.send({ success: false, msg: "Please fill all field" });
  }

  try {
    const addnotes=new Notesmodel({
        title,
        description,
        user:id

    })

    await addnotes.save();

    return res.send({success:true,msg:"Note Add Successfully",addnotes})
  } catch (error) {
    console.log(error);
    return res.send({success:false,msg:"Internal Server error"})
  }
}



// update the notes 

const Updatenotes=async(req,res)=>{
  
    const { title, description, tag } = req.body;
    const newNote = {};
  
    if (title) {
      newNote.title = title;
    }
    if (description) {
      newNote.description = description;
    }
    if (tag) {
      newNote.tag = tag;
    }
  
    try {
      // find the notes and update it
  
      let note = await Notesmodel.findById(req.params.id);
      if (!note) {
        return res.status(404).send({msg:"NOte is Not  found"});
      }
  
      if (note.user.toString() !== req.newuser.id) {
        return res.status(404).send({msg:"Not  allowd "});
      }
  
      note = await Notesmodel.findByIdAndUpdate(
        req.params.id,
        { $set: newNote },
        { new: true }
      );
      res.send({success:true,msg:"Note Update Successfully", note});
    } catch (error) {
      console.log(error);
      res.status(401).send({error:"interl serval error"});
    }
}


// delete notes 

const Deletenotes=async(req,res)=>{
 
  

  
    try {
      // find the notes and update it
  
      let note = await Notesmodel.findById(req.params.id);
      if (!note) {
        return res.status(404).send({msg:"NOte is Not  found"});
      }
  
      if (note.user.toString() !== req.newuser.id) {
        return res.status(404).send({msg:"Not  allowd "});
      }
  
      note = await Notesmodel.findByIdAndDelete(req.params.id );
      res.send({success:true,msg:"Note Delete Successfully"});
    } catch (error) {
      console.log(error);
      res.status(401).send({error:"interl serval error"});
    }


}
module.exports = { Getnotes ,Addnotes,Updatenotes,Deletenotes};
