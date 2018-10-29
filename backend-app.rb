require "sinatra"
require "byebug"

get "/images" do
  response["Access-Control-Allow-Origin"] = "*"
  imgUrl = "https://picsum.photos/200/300?image="
  images = []
  if params[:userId]
    startNum, endNum = params[:userId].split(",")
    images = (startNum...endNum).to_a.map { |num| imgUrl + num.to_s }
  else
    images = (1..50).to_a.map { |num| imgUrl + num.to_s }
  end
  return images.to_json
end

get "/my_images" do
  response["Access-Control-Allow-Origin"] = "*"
  imgUrl = "https://picsum.photos/200/300?image="
  images = []

  images = (1..50).to_a.map { |num| imgUrl + num.to_s }
  return images.to_json
end

get "/users" do
  response["Access-Control-Allow-Origin"] = "*"
  return [
           "1,10",
           "11,20",
           "21,30",
           "31,40",
           "41,50",
         ].to_json
end

options "/login" do
  response["Access-Control-Allow-Origin"] = "*"
  response["Access-Control-Allow-Methods"] = "POST"
  response["Access-Control-Allow-Headers"] = "Origin,Content-Type"
end

post "/login" do
  response["Access-Control-Allow-Origin"] = "*"
  response["Access-Control-Allow-Methods"] = "POST"
  data = JSON.parse(request.body.read)
  if data["email"] == "test@test.com" && data["password"] == "password"
    headers["Authorization"] = "Bearer testing123"
    return {}.to_json
  end
  return {error: "Incorrect password or email"}.to_json
end

post "/upload_image" do
end
