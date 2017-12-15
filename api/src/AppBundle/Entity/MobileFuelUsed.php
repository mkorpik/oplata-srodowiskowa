<?php

namespace AppBundle\Entity;

use Doctrine\ORM\Mapping as ORM;
use ApiPlatform\Core\Annotation\ApiResource;

/**
 * MobileFuelUsed
 * @ApiResource(attributes={"filters"={"mobileFuelUsed.search_filter"}})
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
     * @var integer
     *
     * @ORM\Column(name="mobile_fuel_id", type="integer", nullable=true)
     */
    private $mobileFuelId;

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
     * @var integer
     *
     * @ORM\Column(name="period_id", type="integer", nullable=false)
     */
    private $periodId;

    /**
     * @return int
     */
    public function getDeleted()
    {
        return $this->deleted;
    }

    /**
     * @param int $deleted
     */
    public function setDeleted($deleted)
    {
        $this->deleted = $deleted;
    }

    /**
     * @return \DateTime
     */
    public function getDate()
    {
        return $this->date;
    }

    /**
     * @param \DateTime $date
     */
    public function setDate($date)
    {
        $this->date = $date;
    }

    /**
     * @return float
     */
    public function getExpend()
    {
        return $this->expend;
    }

    /**
     * @param float $expend
     */
    public function setExpend($expend)
    {
        $this->expend = $expend;
    }

    /**
     * @return string
     */
    public function getComment()
    {
        return $this->comment;
    }

    /**
     * @param string $comment
     */
    public function setComment($comment)
    {
        $this->comment = $comment;
    }

    /**
     * @return int
     */
    public function getId()
    {
        return $this->id;
    }

    /**
     * @param int $id
     */
    public function setId($id)
    {
        $this->id = $id;
    }

    /**
     * @return int
     */
    public function getMobileFuelId()
    {
        return $this->mobileFuelId;
    }

    /**
     * @param int $mobileFuelId
     */
    public function setMobileFuelId($mobileFuelId)
    {
        $this->mobileFuelId = $mobileFuelId;
    }

    /**
     * @return int
     */
    public function getPeriodId()
    {
        return $this->periodId;
    }

    /**
     * @param int $periodId
     */
    public function setPeriodId($periodId)
    {
        $this->periodId = $periodId;
    }

    /**
     * @return Mobile
     */
    public function getMobile()
    {
        return $this->mobile;
    }

    /**
     * @param Mobile $mobile
     */
    public function setMobile($mobile)
    {
        $this->mobile = $mobile;
    }


}

