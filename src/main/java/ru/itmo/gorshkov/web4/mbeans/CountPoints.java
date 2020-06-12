package ru.itmo.gorshkov.web4.mbeans;

import org.springframework.jmx.export.annotation.ManagedResource;
import org.springframework.stereotype.Component;

import javax.management.NotificationBroadcasterSupport;

@ManagedResource
@Component
public class CountPoints extends NotificationBroadcasterSupport {
    private int pointsCounter = 0;
    private int outOfAreaCounter = 0;
    private boolean previousOutOfArea = false;

    public void updateCounters(boolean outOfArea) {

        previousOutOfArea = outOfArea;
    }

    public int getPointsCounter() {
        return pointsCounter;
    }

    public void setPointsCounter(int pointsCounter) {
        this.pointsCounter = pointsCounter;
    }

    public int getOutOfAreaCounter() {
        return outOfAreaCounter;
    }

    public void setOutOfAreaCounter(int outOfAreaCounter) {
        this.outOfAreaCounter = outOfAreaCounter;
    }

    public boolean isPreviousOutOfArea() {
        return previousOutOfArea;
    }

    public void setPreviousOutOfArea(boolean previousOutOfArea) {
        this.previousOutOfArea = previousOutOfArea;
    }
}
