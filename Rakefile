desc 'Starting Jekyll server, watching SASS files, running Grunt.'
task :server do
  puts "Starting Jekyll server, watching SASS files, running Grunt."
  jekyllPid = Process.spawn('jekyll serve --watch')
  gruntPid = Process.spawn('grunt')

  trap("INT") {
    [jekyllPid, gruntPid].each { |pid| Process.kill(9, pid) rescue Errno::ESRCH }
    exit 0
  }

  [jekyllPid, gruntPid].each { |pid| Process.wait(pid) }
end
