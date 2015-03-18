class Post < ActiveRecord::Base
  belongs_to :user
  has_many :comments
  mount_uploader :post_photo, PostPhotoUploader

  def as_json(options = {})
    super(options.merge(:include => [:user, :post_photo, :comments => {:include => :user}]))
  end
  
end
