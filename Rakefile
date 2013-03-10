desc 'Start Jekyll server and watching Sass/Bourbon files'
task :server do
  puts "Starting the Jekyll server and watching Sass/Bourbon files."
  jekyllPid = Process.spawn('jekyll --server')
  sassPid = Process.spawn('sass --watch css/sass:css')

  trap("INT") {
    [jekyllPid, sassPid].each { |pid| Process.kill(9, pid) rescue Errno::ESRCH }
    exit 0
  }

  [jekyllPid, sassPid].each { |pid| Process.wait(pid) }
end
