require 'rails_helper'

RSpec.describe User, type: :model do
  let(:user) { User.new(name: "Scott", email: "scott@scott.com", password: "password") }
  let(:user_with_no_name) { User.new(email: "scott@scott.com", password: "password") }
  let(:user_with_no_email) { User.new(name: "Scott", password: "password") }
  let(:user_with_blank_password) { User.new(name: "Scott", email: "scott@scott.com", password: "") }
  let(:user_with_duplicate_email_address) { User.new(name: "Bill", email: "scott@scott.com", password: "password") }
  let(:user_with_duplicate_email_address_with_different_case) { User.new(name: "Bill", email: "Scott@Scott.com", password: "password") }
  let(:user_with_invalidly_formed_email_address) { User.new(name: "Scott", email: "scott@scott", password: "password") }
  
  it "instantiates a User object" do           
  	expect(user).to be_instance_of User    
  end

  it "is not valid if name is not present" do           
  	expect(user_with_no_name.valid?).to be false    
  end

  it "is not valid if email is not present" do           
  	expect(user_with_no_email.valid?).to be false    
  end

  it "is not valid if password is blank" do           
  	expect(user_with_blank_password.valid?).to be false    
  end

  it "is not valid if the email address is not unique" do
  	User.create(name: "Scott", email: "scott@scott.com", password: "password")
  	expect(user_with_duplicate_email_address.valid?).to be false
  end

  it "is not valid if the email address is unique only by case" do
  	User.create(name: "Scott", email: "scott@scott.com", password: "password")
  	expect(user_with_duplicate_email_address_with_different_case.valid?).to be false
  end

  it "is not valid if the email address is not a validly-formatted email address" do
  	expect(user_with_invalidly_formed_email_address.valid?).to be false
  end


end
