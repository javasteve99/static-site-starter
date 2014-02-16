desc "Installs all dependencies."
task :install do
  puts "Installing dependencies"
  system "bundle install"
  system "npm install"
end

desc "Runs Grunt to compile assets, compiles Jekyll site."
task :build do
  puts "Running Grunt tasks and compiling Jekyll site."
  system "grunt:build"
  system "jekyll build"
end

desc "Runs Grunt to compile assets and watch for changes, starts Jekyll server."
task :serve do
  puts "Running Grunt tasks and watching for changes, starting the Jekyll server."
  pids = [
    spawn('grunt'),
    spawn('jekyll serve --watch'),
  ]
  trap "INT" do
    Process.kill "INT", *pids
    exit 1
  end
  loop do
    sleep 1
  end
end