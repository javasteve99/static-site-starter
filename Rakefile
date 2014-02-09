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
  gruntWatchPid = Process.spawn("grunt")
  jekyllServePid = Process.spawn("jekyll serve --watch")
  trap("INT") {
    [gruntWatchPid, jekyllServePid].each { |pid| Process.kill(9, pid) rescue Errno::ESRCH }
    exit 0
  }
  [gruntWatchPid, jekyllServePid].each { |pid| Process.wait(pid) }
end