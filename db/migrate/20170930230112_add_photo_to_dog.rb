class AddPhotoToDog < ActiveRecord::Migration[5.1]
  def change
    add_column :dogs, :photo, :string
  end
end
