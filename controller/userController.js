// import User from '../model/userModel.js';
// export const fetch = async (req, res) => {
//   try {
//     const users = await User.find()
//     if (users?.length === 0) return res.status(404).json({ message: "User not found!" })
//     res.status(200).json(users)
//   } catch (error) {
//     res.status(500).json({ error: "Internal server error!" })
//   }
// }

// export const create = async (req, res) => {
//   try {
//     const userData = new User(req.body);
//     const { email } = userData;
//     const userExist = await User.findOne({ email })
//     if (userExist) return res.status(400).json({ message: "User has been alrady exists!" })
//     const savedUser = await userData.save()
//     res.status(200).json(savedUser)
//   } catch (error) {
//     res.status(500).json({ error: "Internal server error!" })
//   }
// }


// export const update = async (req, res) => {
//   try {
//     const id = req.params.id;
//     const userExist = await User.findOne({ _id: id })
//     if (!userExist) return res.status(404).json({ message: "User not found !" })
//     const updateUser = await User.findByIdAndUpdate(id, req.body, { new: true })
//     res.status(200).json(updateUser)
//   } catch (error) {
//     res.status(500).json({ error: "Internal server error!" })
//   }
// }

// export const deleteUser = async (req, res) => {
//   try {
//     const _id = req.params.id
//     const userExists = await User.findOne({ _id })
//     if (!userExists) return res.status(404).json({ message: "User not found!" })
//     // const removeUser = await User.findByIdAndRemove(_id, req.body, { new: true })
//     // await User.findByIdAndRemove(_id)
//     await User.findByIdAndDelete(_id)
//     // res.status(200).json(removeUser)
//     res.status(200).json({message:"User Deleted Successfully!"})
//   } catch (error) {
//     res.status(500).json({ error: "Internal server error!" })
//   }
// }
