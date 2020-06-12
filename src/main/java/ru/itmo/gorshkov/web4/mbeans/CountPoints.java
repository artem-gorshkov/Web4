package ru.itmo.gorshkov.web4.mbeans;

import lombok.EqualsAndHashCode;
import lombok.ToString;
import lombok.extern.slf4j.Slf4j;
import org.springframework.jmx.export.annotation.ManagedAttribute;
import org.springframework.jmx.export.annotation.ManagedResource;
import org.springframework.stereotype.Component;

import javax.management.Notification;
import javax.management.NotificationBroadcasterSupport;

@ManagedResource
@Component
@ToString
@EqualsAndHashCode(callSuper=false)
@Slf4j
public class CountPoints extends NotificationBroadcasterSupport implements CountPointsMBean {
    private int pointsCounter = 0;
    private int outOfAreaCounter = 0;
    private boolean previousOutOfArea = false;
    private int sequenceCounter = 0;

    public void updateCounters(boolean outOfArea) {
        log.info("update counters");
        pointsCounter++;
        if (outOfArea)
            outOfAreaCounter++;
        if (previousOutOfArea && outOfArea) {
            Notification notification = new Notification(
                    "ru.itmo.gorshkov.web4.doubleOutOfBounds", this, sequenceCounter++, System.currentTimeMillis(),
                    "Two points in row out of area"
            );
            this.sendNotification(notification);
            log.info("doubleOutOfBounds: " + sequenceCounter);
        }
        previousOutOfArea = outOfArea;
    }

    @ManagedAttribute
    public int getPointsCounter() {
        return pointsCounter;
    }

    @ManagedAttribute
    public int getOutOfAreaCounter() {
        return outOfAreaCounter;
    }
}
