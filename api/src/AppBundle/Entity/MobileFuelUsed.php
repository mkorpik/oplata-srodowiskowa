<?php

namespace AppBundle\Entity;

use Doctrine\ORM\Mapping as ORM;

/**
 * MobileFuelUsed
 *
 * @ORM\Table(name="mobile_fuel_used", indexes={@ORM\Index(name="IDX_E5267056776D5B82", columns={"mobile_fuel_id"}), @ORM\Index(name="IDX_E5267056B806424B", columns={"mobile_id"}), @ORM\Index(name="IDX_E5267056EC8B7ADE", columns={"period_id"})})
 * @ORM\Entity
 */
class MobileFuelUsed
{
    /**
     * @var integer
     *
     * @ORM\Column(name="deleted", type="smallint", nullable=true)
     */
    private $deleted;

    /**
     * @var \DateTime
     *
     * @ORM\Column(name="date", type="datetime", nullable=true)
     */
    private $date;

    /**
     * @var float
     *
     * @ORM\Column(name="expend", type="float", precision=10, scale=0, nullable=true)
     */
    private $expend;

    /**
     * @var string
     *
     * @ORM\Column(name="comment", type="string", length=255, nullable=true)
     */
    private $comment;

    /**
     * @var integer
     *
     * @ORM\Column(name="id", type="integer")
     * @ORM\Id
     * @ORM\GeneratedValue(strategy="SEQUENCE")
     * @ORM\SequenceGenerator(sequenceName="mobile_fuel_used_id_seq", allocationSize=1, initialValue=1)
     */
    private $id;

    /**
     * @var \AppBundle\Entity\MobileFuel
     *
     * @ORM\ManyToOne(targetEntity="AppBundle\Entity\MobileFuel")
     * @ORM\JoinColumns({
     *   @ORM\JoinColumn(name="mobile_fuel_id", referencedColumnName="id")
     * })
     */
    private $mobileFuel;

    /**
     * @var \AppBundle\Entity\Mobile
     *
     * @ORM\ManyToOne(targetEntity="AppBundle\Entity\Mobile")
     * @ORM\JoinColumns({
     *   @ORM\JoinColumn(name="mobile_id", referencedColumnName="id")
     * })
     */
    private $mobile;

    /**
     * @var \AppBundle\Entity\Period
     *
     * @ORM\ManyToOne(targetEntity="AppBundle\Entity\Period")
     * @ORM\JoinColumns({
     *   @ORM\JoinColumn(name="period_id", referencedColumnName="id")
     * })
     */
    private $period;


}

