ARG ROS_DISTRO=humble
FROM ros:${ROS_DISTRO}-ros-base

RUN apt-get update && apt-get install -y --no-install-recommends \
        ros-${ROS_DISTRO}-rosbridge-suite \
        && rm -rf /var/lib/apt/lists/*
        