desc 'Starting Jekyll server, watching SASS files, running Grunt.'
task :server do
  puts "Starting Jekyll server, watching SASS files, running Grunt."
  jekyllPid = Process.spawn('jekyll serve --watch')
  sassPid = Process.spawn('sass --watch css/sass:css --style compressed')
  gruntPid = Process.spawn('grunt')

  trap("INT") {
    [jekyllPid, sassPid, gruntPid].each { |pid| Process.kill(9, pid) rescue Errno::ESRCH }
    exit 0
  }

  [jekyllPid, sassPid, gruntPid].each { |pid| Process.wait(pid) }
end
