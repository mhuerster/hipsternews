class CommentsController < ApplicationController
  before_filter :load_post

  def create
    comment = post.comments.create(comment_params)
    respond_with(post, comment)
  end

  def upvote
    comment = post.comments.find(params[:id])
    comment.increment!(:upvotes)
    respond_with(post, comment)
  end

private
  def load_post
    post = Post.find(params[:post_id])
  end

  def comment_params
    params.require(:comment).permit(:body)
  end
end