const { Thought, User } = require('../models');

const thoughtController = {
  // add thought to user's thoughts array
  addThought({ params, body }, res) {
    console.log(body);
    Thought.create(body)
      .then(({ _id }) => {
        return User.findOneAndUpdate(
          { _id: params.userId },
          { $push: { thoughts: _id } },
          { new: true }
        );
      })
      .then(dbUserData => {
        if (!dbUserData) {
          res.status(404).json({ message: 'No user found with this id!' });
          return;
        }
        res.json(dbUserData);
      })
      .catch(err => res.json(err));
  },

  // get all thoughts
  getAllThoughts(req, res) {
    Thought.find({})
      .populate({
        path: 'reactions',
        select: '-__v'
      })
      .select('-__v')
      .sort({ _id: -1 })
      .then(dbThoughtData => res.json(dbThoughtData))
      .catch(err => {
        console.log(err);
        res.sendStatus(400);
      });
  },
  

  // remove thought
  removeThought({ params }, res) {
    Thought.findOneAndDelete({ _id: params.thoughtId })
      .then(deletedThought => {
        if (!deletedThought) {
          return res.status(404).json({ message: 'No thought with this id!' });
        }
        return User.findOneAndUpdate(
          { _id: params.userId },
          { $pull: { thoughts: params.thoughtId } },
          { new: true }
        );
      })
      .then(dbUserData => {
        if (!dbUserData) {
          res.status(404).json({ message: 'No user found with this id!' });
          return;
        }
        res.json(dbUserData);
      })
      .catch(err => res.json(err));
  },

  getThoughtById({ params }, res) {
    Thought.findById(params.id)
    .then(dbThoughtData => {
    if (!dbThoughtData) {
    return res.status(404).json({ message: 'Thought not found' });
    }
    res.status(200).json(dbThoughtData);
    })
    .catch(err => {
    console.error(err.message);
    res.status(500).json({ message: 'Server Error' });
    });
    },
  

// Update a thought by its ID
    updateThought({ params, body }, res) {
    Thought.findOneAndUpdate({ _id: params.id }, body, { new: true, runValidators: true })
      .then(updatedThought => {
        if (!updatedThought) {
          return res.status(404).json({ message: 'Thought not found' });
        }
        res.json(updatedThought);
      })
      .catch(err => res.status(500).json(err));
  },
}


module.exports = thoughtController;
