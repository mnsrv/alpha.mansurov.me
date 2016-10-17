import keystone from 'keystone';
const Post = keystone.list('Post');

exports.list = (req, res) => {
  Post.model
    .find()
    .where('state', 'опубликована')
    .sort('-publishedDate')
    .exec((err, notes) => {
      if (err) return res.apiError('Database error', err);
      res.apiResponse({
        notes
      });
    });
};

exports.get = (req, res) => {
  Post.model
    .findOne({ slug: req.params.slug })
    .exec((err, note) => {
      if (err) return res.apiError('database error', err);
      if (!note) return res.apiError('not found');
      res.apiResponse({
        note
      });
    });
};
