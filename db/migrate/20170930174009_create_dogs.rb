class CreateDogs < ActiveRecord::Migration[5.1]
  def change
    create_table :dogs do |t|
      t.string    :name
      t.string    :size
      t.string    :age
      t.string    :gender
      t.integer   :shelter_id

      t.timestamps
    end
  end
end
